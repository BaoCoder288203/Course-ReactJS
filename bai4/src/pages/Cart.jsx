import React, { useMemo,useState ,useRef ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const productsInit = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        quantity: 1
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        quantity: 2
    }
]

export default function Cart() {
    const commentRef = useRef(null);
    useEffect(() => {
        if (commentRef.current) {
            commentRef.current.focus();
        }
    }, []);
    const [products, setProducts] = React.useState(productsInit)
    const breadcrumb = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Cart'
        }];

    const totalCart = useMemo(() => {
        return products.reduce((sum, current) => {
            // current  = product
            return sum + (current.price * current.quantity)
        }, 0)
    }, [products])


    const handleChangeQuantity = (id, quantity) => {
        const productIndex = products.findIndex(product => product.id === id);

        // kiem tra xem product co ton tai khong
        if (productIndex !== -1) {
            // tham trị & tham chiếu
            // deep clone
            // mang => string => mang
            // mo rong
            // const newProducts = JSON.parse(JSON.stringify(products));
            const newProducts = [...products]; 

            const newProduct = newProducts[productIndex];
            newProduct.quantity = quantity;

            setProducts(newProducts);
        }
    }
    const roundedNumber = totalCart.toFixed(2);
    const [theme, setTheme] = useState('light'); 

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            document.body.className = newTheme === 'dark' ? 'theme-dark' : 'theme-light';
            return newTheme;
        });
    };
    return (
        <div style={{
            width: '100%',
            margin: '0 auto',
        }}>
            <button onClick={toggleTheme} style={{
                backgroundColor: theme === 'dark' ? '#333' : '#FFF',
                color: theme === 'dark' ? '#FFF' : '#333',
                border: '1px solid black',
                borderRadius: '10px',
                padding: '10px',
                cursor: 'pointer',
                position:'absolute',
                top: '10px',
                right: '10px',
            }}>
                <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Breadcrumb list={breadcrumb} />
                <h1>Cart</h1>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '50%' }}>Product</th>
                            <th style={{ width: '0%' }}>Price</th>
                            <th style={{ width: '0%' }}>Quantity</th>
                            <th style={{ width: '30%', textAlign: 'right' }}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <div className="product-info">
                                        <img src="https://via.placeholder.com/150" alt="product" />
                                        <p>{product.name}</p>
                                    </div>
                                </td>
                                <td>${product.price}</td>
                                <td>
                                    <input
                                        type="number"
                                        onChange={(e) => handleChangeQuantity(product.id, e.target.value)}
                                        value={product.quantity}
                                        className="quantity-input"
                                    />
                                </td>
                                <td style={{ textAlign: 'right' }}>${product.price * product.quantity}.00 USD</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <p>Special Instructions</p>
                    <textarea  ref={commentRef} cols='70' rows='7' style={{padding: 10}} placeholder='Some comment for this page....' ></textarea>
                </div>
                <div>
                    <span>${roundedNumber} USD</span>
                </div>
            </div>
        </div>
    )
}
