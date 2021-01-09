
import Parse from 'parse'
let User = Parse.Object.extend('_User')

export async function logIn (username, password){
    await Parse.User.logIn(username, password)
}
export async function find(filter = {}, page = {}) {

    let { pageSize, pageIndex } = page;
    pageSize = pageSize || 10;
    pageIndex = pageIndex || 1

    let roleQ = new Parse.Query(Parse.Role)
    roleQ.equalTo('name','User')
    let role = await roleQ.first()
    
    let usersQ =  role.relation('users').query();
    usersQ.limit(pageSize);
    usersQ.skip((pageIndex-1)*pageSize);
    usersQ.withCount()

    let users = await usersQ.find();
    users.results = users.results.map(v => v.toJSON())
    return users
}

export async function get(id) {

    let result = await new Parse.Query(User).get(id);
    
    return  result.toJSON()

}

export async function create(parameter) {
    let roleQ = new Parse.Query(Parse.Role)
    roleQ.equalTo('name','User')
    let role = await roleQ.first()
    let user = await new Parse.User(parameter);
    const roleACL1 = new Parse.ACL();
    let currentUser = Parse.User.current()
    roleACL1.setWriteAccess(currentUser.id,true);
    roleACL1.setPublicReadAccess(true);
    user.setACL(roleACL1)
    await user.save()
    role.getUsers().add(user);
    await role.save();
    return user

}
export async function update(id, parameter) {
    const query = new Parse.Query("_User");
    let user = await query.get(id)
    return await user.save(parameter)
}

export async function destroy(id) {
    let obj = Parse.User.createWithoutData(id)
    return await obj.destroy()
}
