import React from 'react';
import{Card,CardHeader,CardBody,CardTitle,CardText,CardFooter} from 'reactstrap'
const About = () => {
 return (
  <div>
   <div style={{marginLeft:'80px'}}>
  <Card style={{width:'80%'}}>
    <CardHeader style={{backgroundColor:'rgb(178,168,168'}}>
      Welcome to this site
    </CardHeader>
    <CardBody style={{backgroundColor:'gray'}}>
      <CardTitle tag="h5" style={{backgroundColor:'black' ,color:'white'}}>
        Special Title Treatment
      </CardTitle>
      <CardText>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, distinctio recusandae! Ea hic laboriosam delectus sit laborum. Officiis porro distinctio iusto facilis atque doloribus voluptatem eius dicta facere laudantium explicabo eum vel, nobis incidunt dolorem iste non. Facere praesentium, voluptas doloribus molestiae nesciunt minus explicabo accusamus rem maxime molestias maiores voluptate dicta corporis amet voluptatum, laudantium, alias vel. Asperiores fuga nemo sint, consequuntur similique suscipit amet, fugit ut repellendus reiciendis aliquam esse ducimus eaque ipsam architecto perspiciatis. Reprehenderit, quos, tempora dicta laboriosam illo esse corporis possimus fuga iusto consequuntur tenetur officiis. Quam ullam totam necessitatibus quisquam voluptates omnis architecto voluptate?
      </CardText>
      
    </CardBody>
    <CardFooter style={{backgroundColor:'rgb(178,168,168'}}>
      We Are Best Choise For You
    </CardFooter>
  </Card>
  
</div>
  </div>
 );
};

export default About;