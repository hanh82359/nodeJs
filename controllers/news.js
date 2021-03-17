export const create = (req, res) =>{
    res.json({
        message :"Tạo Mới tin tức"
    })
}

export const update = (req, res) =>{
    res.json({
        message :"Cập nhật Mới tin tức"
    })
}

export const remove = (req, res) =>{
    res.json({
        message :"Xóa tin tức"
    })
}

export const list = (req, res) =>{
    res.json({
        message :"Tất cả  tin tức"
    })
}