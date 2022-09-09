import React from 'react';
import crossStitch from '../../assets/cross-stitch.jpg';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg'; 

export default function SinglePost() {
  return (
    <section className='singlePost__container'>
        <div className='singlePost__wrapper'>
            <img
                className='singlePost__image'
                src={crossStitch}
                alt='postImage' 
            />
        </div>
        <h1 className='singLePost__heading'>
            Kittens
            <div className='singlePost__editIcons'>
                <img 
                    className='singlePost__edit'
                    src={editIcon}
                    alt='postEdit'
                />
                <img 
                    className='singlePost__delete'
                    src={deleteIcon}
                    alt='postDelete'
                />
            </div>
        </h1>
        <div className='singlePost__info'>
            <span className='singlePost__author'>
                Author: <b>Genevieve</b>
            </span>
            <span className='singlePost__date'>
                2 hours ago
            </span>
        </div>
        <p className='singlePost__description'>
            jhfsj fshsdjk fjkhdkjfh fsjhfjkd fdshk 
            dshskdhs fshfksjhfs fskhfskn sdfhskhfksdjs 
            sdkfhsdkjf sdfhsdkjfhsdbf sdfsdhksbsdnbfjsfs
            nkjfk f g ss sdf fwjk fwfw fwnfkwfjdoihhfr rjh
            jhfguhsfwejnfew fjhkjsfn wfkjk fnfkn dfksdjflk sf
            fewh fjd ipoy yjg jfhnjwe wniwj 
        </p>
    </section>
  )
}
