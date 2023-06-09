import { Row, Col } from "react-bootstrap";
import products from "../products";
import Products from "../components/Products";

const HomePage = () => {
	return (
		<>
			<h1>Nike Derniers Ajouts</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Products product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomePage;
