import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import styles from './dropbox.module.css'

const Dropbox = ({resume, setResume=()=>console.error('setResume not provided')}) => {
  const onDrop = useCallback(acceptedFiles => {
    setResume(acceptedFiles[0])
  }, [setResume])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'application/pdf'
  })

  if (!resume) {
    return (
      <div {...getRootProps({className: styles.emptyBox})}>
        <input {...getInputProps({name: 'resume'})}/>
        <FontAwesomeIcon icon={faCloudUploadAlt} size='5x'/>
        <p>Drop your resume here, or click to select it. (PDF only)</p>
      </div>
    )
  } else {
    return (
      <div className={styles.fullBox} onClick={() => setResume(undefined)}>
        <FontAwesomeIcon icon={faFileAlt} size='5x'/>
        <p className={styles.file}><i>{resume.path}</i></p>
      </div>
    )
  }
}

export default Dropbox
