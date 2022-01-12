//Obtener Paquetes
export const getPaq = async()=> {
    const data = await fetch('http://eab5-2800-e2-5680-b33-64ad-3753-cd81-734d.ngrok.io/api/paquetes')
    const paq = await data.json()
    return paq.data
}

//Obtener Descripciones
export const getCarnetDescription = async()=> {
    const data = fetch('http://eab5-2800-e2-5680-b33-64ad-3753-cd81-734d.ngrok.io/api/descripcion-carnet')
    const resp = await data
    const carnet = await resp.json()
    console.log(carnet.data.attributes)
}

//Obtener Permisos
export const getPermiso = async()=> {
    const data = fetch('http://eab5-2800-e2-5680-b33-64ad-3753-cd81-734d.ngrok.io/api/permisos')
    const resp = await data
    const permiso = await resp.json()
    console.log(permiso.data)
}