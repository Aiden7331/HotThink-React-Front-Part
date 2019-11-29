import {createAction,handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga,{createRequestActionTypes} from "../saga/createRequestSaga";
import * as thinkAPI from '../api/think';

//리듀서 생성
const INITIALIZE = 'freeThink/INITIALIZE';
const SET_ORIGINAL_FREE_THINK = 'freeThink/SET_ORIGINAL_FREE_THINK';
const CHANGE_FIELD = 'freeThink/CHANGE_FIELD';
const OPEN_MODAL = 'freeThink/OPEN_MODAL';
const CLOSE_MODAL = 'freeThink/CLOSE_MODAL';
const [WRITE_FREE_THINK,WRITE_FREE_THINK_SUCCESS,WRITE_FREE_THINK_FAILURE] = createRequestActionTypes('freeThink/WRITE_FREE_THINK');
const [UPDATE_FREE_THINK,UPDATE_FREE_THINK_SUCCESS,UPDATE_FREE_THINK_FAILURE] = createRequestActionTypes('freeThink/UPDATE_FREE_THINK');
const [WRITE_COMMENT,WRITE_COMMENT_SUCCESS,WRITE_COMMENT_FAILURE] = createRequestActionTypes('freeThink/WRITE_COMMENT');
const [UPDATE_COMMENT,UPDATE_COMMENT_SUCCESS,UPDATE_COMMENT_FAILURE] = createRequestActionTypes('freeThink/UPDATE_COMMENT');
const [DELETE_COMMENT,DELETE_COMMENT_SUCCESS,DELETE_COMMENT_FAILURE] = createRequestActionTypes('freeThink/DELETE_COMMENT');
const [WRITE_RECOMMENT,WRITE_RECOMMENT_SUCCESS,WRITE_RECOMMENT_FAILURE] = createRequestActionTypes('freeThink/WRITE_RECOMMENT');
const [UPDATE_RECOMMENT,UPDATE_RECOMMENT_SUCCESS,UPDATE_RECOMMENT_FAILURE] = createRequestActionTypes('freeThink/UPDATE_RECOMMENT');
const [DELETE_RECOMMENT,DELETE_RECOMMENT_SUCCESS,DELETE_RECOMMENT_FAILURE] = createRequestActionTypes('freeThink/DELETE_RECOMMENT');
const [LIKE,LIKE_SUCCESS,LIKE_FAILURE] = createRequestActionTypes('freeThink/LIKE');
const [UNLIKE,UNLIKE_SUCCESS,UNLIKE_FAILURE] = createRequestActionTypes('freeThink/UNLIKE');

export const initialize = createAction(INITIALIZE);
export const setOriginalFreeThink = createAction(SET_ORIGINAL_FREE_THINK,post=>post);
export const changeField = createAction(CHANGE_FIELD,({key,value})=>({
    key,value
}));
export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
export const writeFreeThink = createAction(WRITE_FREE_THINK,({title,contents,category,attaches})=>({
    title, contents, category,attaches
}));
export const updateFreeThink = createAction(UPDATE_FREE_THINK,({id,title,contents,image,category})=>({
    id, title, contents, image, category
}));
export const writeComment = createAction(WRITE_COMMENT,({comment, id})=>({
    comment,id
}));
export const updateComment = createAction(UPDATE_COMMENT,({updateContents, id,repId})=>({
    updateContents,id,repId
}));
export const deleteComment = createAction(DELETE_COMMENT,({id,repId})=>({
    id,repId
}));
export const writeRecomment = createAction(WRITE_RECOMMENT,({recomment,id,repId})=>({
    recomment,id,repId
}));
export const updateRecomment = createAction(UPDATE_RECOMMENT,({updateContents,id,repId})=>({
    updateContents,id,repId
}));
export const deleteRecomment = createAction(DELETE_RECOMMENT,({id,repId})=>({
    id,repId
}));
export const like = createAction(LIKE,({id})=>({
    id,
}));
export const unlike = createAction(UNLIKE,({id})=>({
    id,
}));

//사가생성
const writeFreeThinkSaga = createRequestSaga(WRITE_FREE_THINK,thinkAPI.writeFreeThink);
const updateFreeThinkSaga = createRequestSaga(UPDATE_FREE_THINK,thinkAPI.updateFreeThink);
const writeCommentSaga = createRequestSaga(WRITE_COMMENT,thinkAPI.writeComment);
const updateCommentSaga = createRequestSaga(UPDATE_COMMENT,thinkAPI.updateComment);
const deleteCommentSaga = createRequestSaga(DELETE_COMMENT,thinkAPI.deleteComment);
const writeRecommentSaga = createRequestSaga(WRITE_RECOMMENT,thinkAPI.writeRecomment);
const updateRecommentSaga = createRequestSaga(UPDATE_RECOMMENT,thinkAPI.updateRecomment);
const deleteRecommentSaga = createRequestSaga(DELETE_RECOMMENT,thinkAPI.deleteRecomment);
const likeSaga = createRequestSaga(LIKE,thinkAPI.addLike);
const unLikeSaga = createRequestSaga(UNLIKE,thinkAPI.unLike);

export function* freeThinkSaga() {
    yield takeLatest(WRITE_FREE_THINK,writeFreeThinkSaga);
    yield takeLatest(UPDATE_FREE_THINK,updateFreeThinkSaga);
    yield takeLatest(WRITE_COMMENT,writeCommentSaga);
    yield takeLatest(UPDATE_COMMENT,updateCommentSaga);
    yield takeLatest(DELETE_COMMENT,deleteCommentSaga);
    yield takeLatest(WRITE_RECOMMENT,writeRecommentSaga);
    yield takeLatest(UPDATE_RECOMMENT,updateRecommentSaga);
    yield takeLatest(DELETE_RECOMMENT,deleteRecommentSaga);
    yield takeLatest(LIKE,likeSaga);
    yield takeLatest(UNLIKE,unLikeSaga);
}

const initialState={
    title:'',
    contents:'',
    imagePaths:[],
    category:'웹사이트',
    originalPostId:null,
    freeThink:null,
    freeThinkError:null,
    isOpen:false,
    comment:'',
    commentUpdate:'',
    recomment:'',
    recommentUpdate:'',
    replies:[],
    likes:[],
};


const freeThink = handleActions(
    {
        [INITIALIZE]:state=>initialState,
        [OPEN_MODAL]:(state=>({
            ...state,
            isOpen:true,
        })),
        [CLOSE_MODAL]:(state=>({
            ...state,
            isOpen:false,
        })),
        [SET_ORIGINAL_FREE_THINK]:(state,{payload:{think}})=>({
            ...state,
            title:think.title,
            contents: think.contents,
            image:think.image,
            originalPostId: think.bdSeq,
            category: think.category,
            likes:think.likes,
            replies:think.replies,
        }),
        [CHANGE_FIELD]:(state,{payload:{key,value}}) =>({
            ...state,
            [key]:value,
        }),
        //프리띵크 작성
        [WRITE_FREE_THINK]:state =>({
            ...state,
            freeThink:null,
            freeThinkError: null,
        }),
        [WRITE_FREE_THINK_SUCCESS]: (state,{payload:freeThink})=>({
            ...state,
            freeThink:null,
            isOpen:false,
        }),
        [WRITE_FREE_THINK_FAILURE]: (state,{payload:freeThinkError})=>({
            ...state,
            freeThinkError,
        }),
        //프리띵크 수정
        [UPDATE_FREE_THINK_SUCCESS]: (state,{payload:freeThink})=>({
            ...state,
            freeThink,
        }),
        [UPDATE_FREE_THINK_FAILURE]: (state,{payload:freeThinkError})=>({
            ...state,
            freeThinkError,
        }),
        //좋아요
        [LIKE_SUCCESS]:(state,{payload:userEmail})=>({
            ...state,
            //해당 freeThink의 list에 추가
            likes:userEmail,
        }),
        [LIKE_FAILURE]:(state,{payload:userEmail})=>({
            ...state,
        }),
        //좋아요취소
        [UNLIKE_SUCCESS]:(state,{payload:userEmail})=>({
            ...state,
            //해당 freeThink의 list에서 삭제
            likes: state.likes.filter(v => v.user.email !==userEmail),
        }),
        [UNLIKE_FAILURE]:(state,{payload:userEmail})=>({
            ...state,
        }),
        //댓글작성
        [WRITE_COMMENT_SUCCESS]:(state,{payload:replies})=>({
            ...state,
            comment:'',
            replies:replies,
        }),
        [WRITE_COMMENT_FAILURE]:(state,{payload:error})=>({
            ...state,
            commentError:error,
        }),
        //댓글수정
        [UPDATE_COMMENT_SUCCESS]:(state,{payload:replies})=>({
            ...state,
            comment:'',
            replies:replies,
        }),
        [UPDATE_COMMENT_FAILURE]:(state,{payload:error})=>({
            ...state,
            commentError:error,
        }),
        //댓글삭제
        [DELETE_COMMENT_SUCCESS]:(state,{payload:replies})=>({
            ...state,
            comment:'',
            replies:replies,
        }),
        [DELETE_COMMENT_FAILURE]:(state,{payload:error})=>({
            ...state,
            commentError:error,
        }),
        //대댓글 작성
        [WRITE_RECOMMENT_SUCCESS]:(state,{payload:replies})=>({
            ...state,
            comment:'',
            replies:replies,
        }),
        [WRITE_RECOMMENT_FAILURE]:(state,{payload:error})=>({
            ...state,
            commentError:error,
        }),
        //대댓글 수정
        [UPDATE_RECOMMENT_SUCCESS]:(state,{payload:replies})=>({
            ...state,
            comment:'',
            replies:replies,
        }),
        [UPDATE_RECOMMENT_FAILURE]:(state,{payload:error})=>({
            ...state,
            commentError:error,
        }),
        //대댓글 삭제
        [DELETE_RECOMMENT_SUCCESS]:(state,{payload:replies})=>({
            ...state,
            comment:'',
            // replies:replies,
        }),
        [DELETE_RECOMMENT_FAILURE]:(state,{payload:error})=>({
            ...state,
            commentError:error,
        }),
    },
    initialState,
);

export default freeThink;