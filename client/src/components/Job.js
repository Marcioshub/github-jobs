import React, { useState, memo } from "react";
import { Badge, Card, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default memo(function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card key={job.id} className="my-4 p-5" style={{ width: "100%" }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {job.type}
            </Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div className="mt-2" style={{ wordBreak: "break-all" }}>
              <ReactMarkdown
                source={job.how_to_apply.replace(/<[^>]+>/g, "")}
              />
            </div>
          </div>
          <img
            className="d-none d-md-block"
            height="50"
            src={job.company_logo}
            alt={job.company}
          />
        </div>
        <Card.Text>
          <Button variant="primary" onClick={() => setOpen(!open)}>
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description.replace(/<[^>]+>/g, "")} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
});

// export default memo(function Job({ jobs }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="my-4">
//       {jobs.map((job) => (
//         <Card key={job.id} className="my-1 p-5" style={{ width: "100%" }}>
//           <Card.Body>
//             <div className="d-flex justify-content-between">
//               <div>
//                 <Card.Title>
//                   {job.title} -{" "}
//                   <span className="text-muted font-weight-light">
//                     {job.company}
//                   </span>
//                 </Card.Title>
//                 <Card.Subtitle className="text-muted mb-2">
//                   {new Date(job.created_at).toLocaleDateString()}
//                 </Card.Subtitle>
//                 <Badge variant="secondary" className="mr-2">
//                   {job.type}
//                 </Badge>
//                 <Badge variant="secondary">{job.location}</Badge>
//                 <div className="mt-2" style={{ wordBreak: "break-all" }}>
//                   <ReactMarkdown
//                     source={job.how_to_apply.replace(/<[^>]+>/g, "")}
//                   />
//                 </div>
//               </div>
//               <img
//                 className="d-none d-md-block"
//                 height="50"
//                 src={job.company_logo}
//                 alt={job.company}
//               />
//             </div>
//             <Card.Text>
//               <Button variant="primary" onClick={() => setOpen(!open)}>
//                 {open ? "Hide Details" : "View Details"}
//               </Button>
//             </Card.Text>
//             <Collapse in={open}>
//               <div className="mt-4">
//                 <ReactMarkdown
//                   source={job.description.replace(/<[^>]+>/g, "")}
//                 />
//               </div>
//             </Collapse>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// });
