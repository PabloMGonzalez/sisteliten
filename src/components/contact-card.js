import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";

function ContactCard() {
  return (
    <>
      <div className="container">
        <Card className="text-center">
          <Card.Header>QUIENES SOMOS</Card.Header>
          <Card.Body>
            <Card.Text>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at gravida eros. Nulla facilisi. Praesent finibus, neque eget
              blandit tincidunt, nisi nunc venenatis ante, eu luctus dolor
              turpis quis erat. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Suspendisse mauris dolor, maximus vel semper vitae,
              tempor nec diam. Donec tellus velit, congue quis risus at,
              facilisis volutpat arcu. Ut vitae libero sed odio porta convallis
              quis et eros. Curabitur augue lectus, faucibus a venenatis
              aliquam, sodales blandit magna. Nam magna enim, ullamcorper at
              maximus nec, pretium a ipsum. Maecenas imperdiet faucibus aliquam.
              Fusce dui metus, aliquet accumsan porttitor ac, molestie id mi.
              Nullam at ligula nulla. Aenean at accumsan justo, ut accumsan
              neque. Sed quis dui finibus, gravida diam quis, ullamcorper enim.
              Pellentesque quis ante vel tellus sagittis mollis. Ut luctus velit
              id nisi sagittis, vel mollis ligula elementum. Suspendisse ut
              bibendum turpis. Pellentesque vehicula purus dolor. Fusce in
              mollis odio, nec fermentum lectus. Aenean ut ex sit amet dui
              malesuada eleifend. Praesent luctus bibendum justo, ut commodo
              neque hendrerit varius.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ContactCard;
