import api from '.api-helper'

export const getAllComments = async () => {
    try {
        const resp = await api.get('/comments')
        return resp.data
    } catch (error) {
        throw error
    }
}

export const postComment = async (commentData) => {
    try {
        const resp = await api.post('/comments', { comment: commentData })
        return resp.data
    } catch (error) {
        throw error
    }
}
