import React, { useEffect } from 'react'
import { ListGroup, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const EventList = () => {

  const dispatch = useDispatch()
  const { events } = useSelector(state => state.allEvents)
  useEffect(() => {

  }, [])

  return (
    <Container fluid className="event-lists py-5">
      <ListGroup className='col-12 col-sm-10 col-md-8 col-lg-6 mx-auto'>
        {
          (events.length > 0)
            ? events.map((event, index) => <Container fluid className="lists mb-3">
              <button class="btn w-100" type="button" data-bs-toggle="collapse" data-bs-target={`#target${index}`} aria-expanded="false" aria-controls="collapseExample">
                {event.title}
              </button>
              <div class="collapse bg-transparent" id={`target${index}`}>
                <div class="card-body bg-transparent text-light">
                  <div className='d-flex'>
                    <h6>Type: </h6>&nbsp;&nbsp;{event.type}
                  </div>
                  <div className='d-flex'>
                    <h6>Start Date: </h6>&nbsp;&nbsp;{event.sDate}
                  </div>
                  <div className='d-flex'>
                    <h6>End Date: </h6>&nbsp;&nbsp;{event.eDate}
                  </div>
                  <div className='d-flex'>
                    <h6>Description: </h6>&nbsp;&nbsp;{event.desc}
                  </div>
                  <div className='d-flex'>
                    <h6>Handled By: </h6>&nbsp;&nbsp;{event.handlers}
                  </div>
                  <div className='d-flex'>
                    <h6>Organization: </h6>&nbsp;&nbsp;{event.organization}
                  </div>
                  <div className='d-flex'>
                    <h6>Sub Events: </h6>&nbsp;&nbsp;{event.subEvent}
                  </div>
                </div>
              </div>
            </Container>)
            : <h1 className="text-light">No Events To Show Please Add Events</h1>
        }

      </ListGroup >
    </Container >
  )
}

export default EventList