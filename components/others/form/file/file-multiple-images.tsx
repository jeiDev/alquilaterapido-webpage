import { useState, useRef, useEffect } from "react"
import settings from "~/settings";
import useStyles from "~/components/styles/others/form/file/file-multiple-images.style"
import { fileToUrlBlob, validateType } from "~/helpers/code/form.helper";
import DragAndDrop from "~/helpers/code/drag-and-drop.helper";
import { FileMultipleImagesPropsI } from "~/interfaces/form/form.interface";

const FileMultipleImages = ({files, setFiles} : FileMultipleImagesPropsI) => {
    const [error, setError] = useState("")
    const [datas, setDatas] = useState(files)
    const classes = useStyles()
    const contentImages = useRef()
    
    FileMultipleImages.global = {
        setDatas, datas, setError, setFiles
    }

    let dragAndDrop;

    useEffect(() => {
        dragAndDrop = new DragAndDrop({
            container: contentImages.current,
            keyId: "image-"
        });
    
        dragAndDrop.update = (response) => {
            if(response.move) FileMultipleImages.handlerOrder(response.move)
        }
    }, [])

    return (
        <div className={classes.container}>
            <div>
                <div className={classes.boxViewImage}>
                    <div className={classes.contentImage} onDragOver={e => dragAndDrop.onDragOver(e)} onDrop={(e) => dragAndDrop.onDrop(e)} ref={contentImages}>
                        {datas.map((data, i) => {
                            return (
                                <div key={i} className={classes.boxImage} style={{ border: `1px dotted #12A4C9`, cursor: "move" }} id={`box-image-${i}`}>
                                    <div className={classes.boxDelete} onClick={() => FileMultipleImages.handlerDelete(i)}><span className={classes.delete}>x</span></div>
                                    <div className={classes.bgImage} id={`image-${i}`} draggable={true} onDragStart={e => dragAndDrop.onDragStart(e)}></div>
                                    <img src={fileToUrlBlob(data.file)} className={classes.image} onDragStart={(e) => {
                                        e.stopPropagation()
                                        e.preventDefault()
                                    }}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className={classes.pViewImage}>Elige una imagen como principal para la portada</p>
            </div>
            <div className={classes.boxFile}>
                <input type="file" name="" className={classes.file} onChange={FileMultipleImages.handlerChange} />
                <span className={classes.fileText}>Suelta la imagen aqui</span>
                <span className={classes.fileText}>o</span>
                <div className={classes.fileButton}>Cargar Imagen</div>
            </div>
            <div>
                {error && (<p>{error}</p>)}
            </div>
        </div>
    )
}

FileMultipleImages.global = {
    setFiles: null,
    setDatas: null,
    datas: null,
    setError: null
}

FileMultipleImages.handlerOrder = (response) => {
    const {datas, setDatas, setFiles} = FileMultipleImages.global

    const order = datas.map((file) => {
        let value = response[file.index]
        if(typeof value != null && typeof value != "undefined") {
            file.index = value
        }
        return file;
    });

    const _data = order.sort((a, b) => a.index - b.index);

    setDatas(_data);
    setFiles(_data);
}

FileMultipleImages.handlerDelete = (index) => {
    const {datas, setDatas, setFiles} = FileMultipleImages.global
    
    let order = datas;

    delete order[index]

    order = order.filter(d => d).map((o, i) => {
        o.index = i;
        return o;
    })

    setDatas(order);
    setFiles(order);
}

FileMultipleImages.handlerChange = (e) => {
    const el = e?.target
    const file: File = el?.files[0]
    const mimeImage = settings.form.mimes.images
    const {datas, setDatas, setError, setFiles} = FileMultipleImages.global

    if (!file || !validateType(file, mimeImage)) {
        setError("Archivo invalido")
        return el.value = ""
    }

    const _datas = [...datas, { file, index: datas.length }];

    setError("");
    setDatas(_datas);
    setFiles(_datas);
}

export default FileMultipleImages;