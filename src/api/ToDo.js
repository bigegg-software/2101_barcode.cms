
import Parse from 'parse'

let ToDo = Parse.Object.extend('ToDo')

export async function find(filter = {}, page = {}) {

    let { pageSize, pageIndex } = page;
    pageSize = pageSize || 10;
    pageIndex = pageIndex || 1

    let result = await new Parse.Query(ToDo)
        .limit(pageSize)
        .skip((pageIndex - 1) * pageSize)
        .withCount()    
        .find();
    result.results = result.results.map(v => v.toJSON())
    return result
}

export async function get(id) {

    let result = await new Parse.Query(ToDo).get(id);
    
    return  result.toJSON()

}

export async function create(parameter) {

    return  new ToDo(parameter).save()

}
export async function update(id, parameter) {

    let obj = ToDo.createWithoutData(id)

    return await obj.save(parameter)
    
}

export async function destroy(id) {

    let obj = ToDo.createWithoutData(id)

    return await obj.destroy()

}