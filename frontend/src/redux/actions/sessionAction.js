//Dependencias
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { setDoc, doc, collection, getDoc } from "firebase/firestore";
import { db, google, facebook } from '../../Firebase/firebase'
//Componentes
import { sesionUsr } from '../types/types'

//Registro Email y contraseña
export const RegistroEmailPass = (data)=> {
    return async(dispatch)=>{
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth,data.email,data.pass)
        .then(async(resp)=> {
            alert('Bienvenido')
            await setDoc(doc(collection(db, "usuarios"), resp.user.uid), {
                nombre: data.nombre,
                email: data.email,
                tel: data.tel,
                image: "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png?x=480&quality=20",
                cursos: [],
                saldo: [{
                    disponible: 0,
                    invertido: 0
                }]
            }).then(()=> dispatch(registroEmail(data, resp.user.uid)))
        }).catch(()=> alert('Email ya existe'))
    }
}

const registroEmail = (data, id)=> {
    return {
        type: sesionUsr.registro,
        payload: {
            id: id,
            nombre: data.nombre,
            email: data.email,
            tel: data.tel,
            image: "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png?x=480&quality=20",
            cursos: [],
            saldo: [{
                disponible: 0,
                invertido: 0
            }]
        }
    }
}

//Inicio de sesion con email
export const LoginEmailPass = (data)=> {
    return async(dispatch)=> {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, data.email, data.pass)
        .then( async({ user })=> {
            await getDoc(doc(db, 'usuarios', user.uid))
            .then(data => {
                dispatch(actionLogin(user.uid, data.data()))
            })
        })
    }
}

const actionLogin = (id, data)=> {
    return {
        type: sesionUsr.inicio,
        payload: {
            id: id,
            nombre: data.nombre,
            email: data.email,
            tel: data.tel,
            image: data.image,
            cursos: data.cursos,
            saldo: data.saldo
        }
    }
}

//Registro o inicio con Google
export const authGoogle = () => {
    return async(dispatch)=> {
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(async({ user })=> {
            await getDoc(doc(db, 'usuarios', user.uid))
            .then(async(resp)=> {
                if (resp.data() === undefined){
                    await setDoc(doc(collection(db, "usuarios"), user.uid),{
                        nombre: user.displayName,
                        email: user.email,
                        tel: user.phoneNumber,
                        image: user.photoURL,
                        cursos: [],
                        saldo: [{
                            disponible: 0,
                            invertido: 0
                        }]
                    }).then(()=> {
                        getDoc(doc(db, "usuarios", user.uid))
                        .then((data)=> dispatch(actionAuthRedes(user.uid, data.data())))
                    })
                }else{
                    dispatch(actionAuthRedes(user.uid, resp.data()))
                }
            })
        })
    }
}

//Registro o inicio con facebook
export const authFacebook = () => {
    return async(dispatch)=> {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
        .then(async({ user })=> {
            console.log(user)
            await getDoc(doc(db, 'usuarios', user.uid))
            .then(async(resp)=> {
                if (resp.data() === undefined){
                    await setDoc(doc(collection(db, "usuarios"), user.uid),{
                        nombre: user.displayName,
                        email: user.email,
                        tel: user.phoneNumber,
                        image: user.photoURL,
                        cursos: [],
                        saldo: [{
                            disponible: 0,
                            invertido: 0
                        }]
                    }).then(()=> {
                        getDoc(doc(db, "usuarios", user.uid))
                        .then((data)=> dispatch(actionAuthRedes(user.uid, data.data())))
                    })
                }else{
                    dispatch(actionAuthRedes(user.uid, resp.data()))
                }
            })
        })
    }
}

const actionAuthRedes = (id, user)=> {
    return {
        type: sesionUsr.redes,
        payload: {
            id: id,
            nombre: user.nombre,
            email: user.email,
            tel: user.tel,
            image: user.image,
            cursos: user.cursos,
            saldo: user.saldo
        }
    }
}

//Recuperar datos al recargar sitio web
export const sesion = (data)=> {
    return (dispatch)=> {
        dispatch({
            type: sesionUsr.sesion,
            payload: {
            id: data?.id,
            nombre: data?.nombre,
            email: data?.email,
            tel: data?.tel,
            image: data?.image,
            cursos: data?.cursos,
            saldo: data?.saldo
            }
        })
    }
}

//Cerrar Sesion
export const cerrarSesion = ()=> {
    return async(dispatch)=> {
        const auth = getAuth()
        await signOut(auth)
        .then(()=> dispatch(cerrar()))
    }
}

const cerrar = ()=> {
    return {
        type: sesionUsr.cerrar
    }
}