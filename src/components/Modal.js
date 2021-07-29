import { useRef } from 'react'
import { useSpring, animated } from 'react-spring'

const Modal = ({ isOpen, setIsOpen, activeVideo  }) => {

    const anim = useSpring({
        config: {
            duration: 800
        },
        opacity: isOpen ? 1 : 0,
        filter: isOpen ? `blur(0px)` : `blur(5px)`,
        transform: isOpen ? `translateY(0%)` : `translateY(-100%)`
    })

    const modalRef = useRef()

    const handleClose = (e) => {
        if (modalRef.current === e.target) {
            setIsOpen(false)
        }
    }

    if (isOpen) {
        return (
            <div className="modal-bg" ref={modalRef} onClick={handleClose}>
                <animated.div className="modal" style={anim}>
                    <iframe
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${activeVideo}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </animated.div>
            </div>
        )
    } else {
        return null
    }
}

export default Modal
