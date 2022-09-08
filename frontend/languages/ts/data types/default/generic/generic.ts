var obj23:Iobj23<string>={
    a:7, b:8
}
obj23.c="abcd"

var obj24:Iobj23<number>={
    a:7, b:8
}
obj24.c="9"


interface Iobj3H<T>{
    a:T,
    b:T,
    [Key:string]:T
}

var objt:Iobj3H<number>={a:4, b:5}
objt.c=8

interface Iobj23<T,U,X>{
    a:T,
    b:T,
    [Key:string]:T

    
    }

    let obj231:Iobj23<String, number, number>={
        a:7, b:8
    }
    obj23.c="jj"