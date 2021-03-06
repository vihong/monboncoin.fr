import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class EditProductForm extends React.Component {
	static propTypes = {
		product            : PropTypes.shape({
			name   : PropTypes.string,
			price  : PropTypes.number,
			status : PropTypes.string,
			desc   : PropTypes.string,
			image  : PropTypes.string
		}),
		updateProductState : PropTypes.func,
		index              : PropTypes.string,
		deleteProductState : PropTypes.func
	};

	handleChange = (event) => {
		const updatedProduct = {
			...this.props.product,
			// new thing in ES6 used right below : "computed property name"
			// it allows you to change dynamically the property you've updated
			[event.currentTarget.name]: event.currentTarget.value
		};
		console.log(updatedProduct);
		this.props.updateProductState(updatedProduct, this.props.index);
	};

	handleDelete = () => {
		this.props.deleteProductState(this.props.index);
	};

	render() {
		// console.log(this.props.product);
		return (
			<div className="product-edit">
				<input
					name="name"
					onChange={this.handleChange}
					value={this.props.product.name}
					ref={this.nameRef}
					type="text"
					required
					placeholder="Produit"
					maxLength="35"
				/>
				<input
					name="price"
					onChange={this.handleChange}
					value={formatPrice(this.props.product.price)}
					required
					ref={this.priceRef}
					type="text"
					placeholder="Prix"
				/>
				<textarea
					name="desc"
					onChange={this.handleChange}
					value={this.props.product.desc}
					ref={this.descRef}
					placeholder="Expliquez pourquoi votre produit est génial"
					maxLength="160"
				/>
				<input
					name="image"
					ref={this.imageRef}
					onChange={this.handleChange}
					value={this.props.product.image}
					type="text"
					placeholder="URL de l'image"
				/>
				<button onClick={this.handleDelete}>
					Supprimer de vos annonces
				</button>
			</div>
		);
	}
}

export default EditProductForm;
