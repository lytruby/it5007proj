const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
    if (dateRegex.test(value)) return new Date(value);
    return value;
}

// 1. Common framework: header footer
// header
class Header extends React.Component {
    render() {
        return (
            <div>
                <section className="shortcut">
                    <div className="w">
                        <div className="fl">
                            <ul>
                                <li>Welcome to Bookworm! &nbsp;</li>
                                <li><a href="/#/login">Please log in | &nbsp;</a></li>
                                <li><a href="/#/signup">Sign up for free</a></li>
                            </ul>
                        </div>
                        <div className="fr">
                            <ul>
                                <li><a href="/#/homepage">Homepage</a></li>
                                <li></li>
                                <li><a href="/#/order">My Orders</a></li>
                                <li></li>
                                <li><a href="/#/addbook">Sell a book</a></li>
                                <li></li>
                                <li><a href="">Contact us</a></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <header className="header w">

                    <div className="logo">
                        <img src="images/logo.png" width="160%" onClick={() => { window.location.href = "/#/homepage" }}></img>
                    </div>

                    <div className="search">
                        <input type="search" name="" id="" placeholder="Title/ Course/ Author"></input>
                        <button>Search</button>
                    </div>

                    <div className="hotwords">
                        <a href="#" className="style_red">Discounts</a>
                        <a href="#">Daily Vouchers</a>
                        <a href="#">Computing</a>
                        <a href="#">Engineering</a>
                        <a href="#">Architecture</a>
                        <a href="#">Literature</a>
                    </div>
                    <div className="shopcar">
                        <img src="images/cart.png" width="20px" height="20px"></img>
                        <a href="">  My shopping cart</a>
                        <i className="count">3</i>
                    </div>
                </header>
            </div>
        )

    }
}

// footer
class Footer extends React.Component {
    render() {
        return (
            <footer className='footer' >
                <div className="mod_help">
                    <dl>
                        <dt>ORGANIZATION</dt>
                        <dd><a href="">About us</a></dd>
                        <dd><a href="">Terms</a></dd>
                        <dd><a href="">Privacy</a></dd>
                        <dd><a href="">Ad Preferences</a></dd>
                        <dd><a href="">Help</a></dd>
                    </dl>
                    <dl>
                        <dt>WORK WITH US</dt>
                        <dd><a href="">Authors</a></dd>
                        <dd><a href="">Advertise</a></dd>
                        <dd><a href="">Ads blog</a></dd>
                        <dd><a href="">API</a></dd>
                    </dl>
                    <dl>
                        <dt>CONNECT</dt>
                        <dd></dd>
                        <dd><img src="images/follow.png" width="60%"></img></dd>
                    </dl>
                </div>
            </footer>

        )
    }
}

// 2. Homepage
class HP_Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <div className="w">
                    <div className="dropdown">
                        <div className="dt"> All textbook genres</div>
                        <div className="dd">
                            <ul>
                                <li><a href="#">Art</a> </li>
                                <li><a href="#">Biography</a> </li>
                                <li><a href="#">Business</a> </li>
                                <li><a href="#">Computing</a> </li>
                                <li><a href="#">History</a> </li>
                                <li><a href="#">Law</a> </li>
                                <li><a href="#">Mathematics</a> </li>
                                <li><a href="#">Medicine</a> </li>
                                <li><a href="#">Music</a> </li>
                                <li><a href="#">Poetry</a> </li>
                                <li><a href="#">Psychology</a> </li>
                                <li><a href="#">Romance</a> </li>
                                <li><a href="#">Science</a> </li>
                                <li><a href="#">Sports</a> </li>
                                <li><a href="#">More genres</a> </li>

                            </ul>
                        </div>
                    </div>
                    <div className="navitems">
                        <ul>
                            <li><a href="#">Faculty of Sciences</a></li>
                            <li><a href="#">Faculty of Engineering</a></li>
                            <li><a href="#">School of Computing</a></li>
                            <li><a href="#">More Falculties</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

class HP_Main extends React.Component {
    render() {
        return (
            <div className="w">
                <div className="main">
                    <div className="focus">
                        <a href="" className="left-arrow">
                        </a>
                        <a href="" className="right-arrow">
                        </a>
                        <ul>
                            <li>
                                <img src="images/1.png" alt="" width="100%" height="450px"></img>
                            </li>
                        </ul>
                        <ul className="circle">
                            <li></li>
                            <li></li>
                            <li className="current"></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="newsflash">
                        <div className="news">
                            <div className="news-hd">
                                <h5>News</h5>
                                <a href="" className="more">More</a>
                            </div>
                            <div className="news-bd">
                                <ul>
                                    <li><a href=""><strong>[Hot]</strong> Get ready to new semester sale!</a></li>
                                    <li><a href=""><strong>[Hot]</strong> Come and get daily cashback up to 10%!</a></li>
                                    <li><a href=""><strong>[Hot]</strong> What are your friends reading?</a></li>
                                    <li><a href=""><strong>[Hot]</strong> Best Computing textbooks</a></li>
                                    <li><a href=""><strong>[Hot]</strong> Best MERN stack textbooks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="news">
                            <div className="news-hd">
                                <h5>Top Reviews</h5>
                            </div>
                            <div className="news-bd">
                                <img src="images/ad1.jpeg" alt="" width="100%"></img>
                            </div>
                            <div className="news-bd">
                                <img src="images/ad3.jpeg" alt="" width="100%"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function HP_book(props) {
    const book = props.book;
    const booklink = `#/detail/${book.title}`
    return (
        <div className="abook">
            <img src={book.photo} ></img>
            <li className="abook_title" ><a href={booklink}> {book.title}</a></li>
            <li className="abook_price"> $ {book.price}</li>
        </div>
    )
}


function Homepage(props) {
    const books = props.books.map(book => <HP_book book={book} />)
    return (
        <React.Fragment>
            <Header />
            <HP_Nav />
            <HP_Main />

            <div className="w sk_container">
                <h2>New Arrivals</h2>
                <ul className="clearfix">
                    {books}
                </ul>
            </div>
            <Footer />
        </React.Fragment>
    )
}

// 3. Login Page
class Login extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.login;
        const user = {
            email: form.email.value,
            password: form.password.value,
        }
        // console.log(user)
        this.props.checkUser(user);
        form.email.value = ""; form.password.value = "";
    }


    render() {
        return (
            <React.Fragment>
                <section className="shortcut">
                    <div className="w">
                        <div className="fl">
                            <ul>
                                <li>Welcome to Bookworm! &nbsp;</li>
                                <li><a href="/#/login">Please log in | &nbsp;</a></li>
                                <li><a href="/#/signup">Sign up for free</a></li>
                            </ul>
                        </div>
                        <div className="fr">
                            <ul>
                                <li><a href="/#/homepage">Homepage</a></li>
                                <li></li>
                                <li><a href="/#/order">My Orders</a></li>
                                <li></li>
                                <li><a href="/#/addbook">Sell a book</a></li>
                                <li></li>
                                <li><a href="">Contact us</a></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="w">
                    <header>
                        <div className="logo">
                            <img src="images/logo.png" alt="" />
                        </div>
                    </header>
                    <div className="loginarea">
                        <h3>
                            Sign in
                            <div className="login">Already have an account?<a href=""> Sign in</a></div>
                        </h3>
                        <div className="reg-form">
                            <form name="login" onSubmit={this.handleSubmit}>
                                <ul>
                                    <li><label for="">Email: </label> <input type="text" name="email" className="inp" />
                                        <span className="success"><i className="success_icon"></i>
                                            Email format is correct</span>
                                    </li>
                                    <li><label for="">Password: </label> <input type="password" name="password" className="inp" />
                                        <span className="error"><i className="error_icon"></i>
                                            Password format is not correct</span>
                                    </li>

                                    <li>
                                        <input type="submit" value="SIGN IN" className="btn" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
// 4. Sign up Page
class Signup extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.register;
        const user = {
            name: form.name.value, email: form.email.value,
            phone: form.phone.value, password: form.password.value,
            purchase: 0, sell: 0,
        };
        // const agree = form.agree.value;
        // console.log(form.agree.checked)
        if (form.agree.checked === true) {
            this.props.createUser(user);
        } else {
            alert("please agree to our terms of services")
        }

        form.name.value = ""; form.phone.value = ""; form.email.value = ""; form.password.value = "";
    }


    render() {
        return (
            <React.Fragment>
                <section className="shortcut">
                    <div className="w">
                        <div className="fl">
                            <ul>
                                <li>Welcome to Bookworm! &nbsp;</li>
                                <li><a href="/#/login">Please log in | &nbsp;</a></li>
                                <li><a href="/#/signup">Sign up for free</a></li>
                            </ul>
                        </div>
                        <div className="fr">
                            <ul>
                                <li><a href="/#/homepage">Homepage</a></li>
                                <li></li>
                                <li><a href="/#/order">My Orders</a></li>
                                <li></li>
                                <li><a href="/#/addbook">Sell a book</a></li>
                                <li></li>
                                <li><a href="">Contact us</a></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="w">
                    <header>
                        <div className="logo">
                            <img src="images/logo.png" alt="" onClick={this.props.showHomePage} />
                        </div>
                    </header>
                    <div className="registerarea">
                        <h3>
                            New User Register
                            <div className="login">Already have an account?<a href=""> Sign in</a></div>
                        </h3>
                        <div className="reg-form">
                            <form name="register" onSubmit={this.handleSubmit}>
                                <ul>
                                    <li><label for="">Name: </label> <input type="text" name="name" className="inp" />
                                    </li>
                                    <li><label for="">Phone Number: </label> <input type="text" name="phone" className="inp" />
                                        <span className="error"><i className="error_icon"></i>
                                            Phone number format is not correct</span>
                                    </li>
                                    <li><label for="">Email: </label> <input type="text" name="email" className="inp" />
                                        <span className="success"><i className="success_icon"></i>
                                            Email format is correct</span>
                                    </li>
                                    {/* <li><label for="">OTP: </label> <input type="text" className="inp" />
                                    <span className="success"><i className="success_icon"></i>
                                        OTP is correct</span>
                                </li> */}
                                    <li><label for="">Password: </label> <input type="password" name="password" className="inp" />
                                        <span className="error"><i className="error_icon"></i>
                                            Password format is not correct</span>
                                    </li>
                                    <li className="safe">Password Strength <em className="ruo">Weak</em> <em className="zhong">Meidum</em> <em class="qiang">Strong</em>
                                    </li>
                                    <li><label for="">Re-enter Password: </label> <input type="password" className="inp" />
                                        <span className="error"><i className="error_icon"></i>
                                            Password doesn't match</span>
                                    </li>
                                    <li className="agree"> <input name="agree" type="checkbox" />  agree to our
                                        <a href=""> Terms of Service</a>
                                    </li>
                                    <li>
                                        <input type="submit" value="Register" className="btn" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}


// 5. Book Detail Page
class OrderAdd extends React.Component {
    constructor() {
        super();
        this.handleBuy = this.handleBuy.bind(this)
    }

    handleBuy(e) {
        e.preventDefault();
        const order = {
            // bookid:6,
            booktitle: this.props.book.title,
            buyerid: 6,
        }
        this.props.createOrder(order);
    }

    render() {
        return (
            <button onClick={this.handleBuy}>Buy Now</button>
        )
    }
}

function Detailpage(props) {
    const book = props.book;
    const booklink = `/detail/${book.title}`;

    return (
        //<React.Fragment>
        <ReactRouterDOM.Route path={booklink}>
            <Header />
            <div className="de_container w">

                <div className="crumb_wrap">
                    <a href="#">{book.category}</a> 〉 <a href="#">{book.course}  </a> 〉 <a href="#">{book.title}   </a>
                </div>

                <div className="product_intro clearfix">

                    <div className="preview_wrap fl">
                        <div className="preview_img">
                            <img className="book_img" src={book.photo} alt="" />
                        </div>

                        <div className="preview_list">
                            <a href="#" className="arrow_prev"></a>
                            <a href="#" className="arrow_next"></a>
                            <ul className="list_item">
                                <li>
                                    <img src={book.photo} alt="" />
                                </li>
                                <li className="current">
                                    <img src={book.photo} alt="" />
                                </li>
                                <li>
                                    <img src={book.photo} alt="" />
                                </li>
                                <li>
                                    <img src={book.photo} alt="" />
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="itemInfo_wrap fr">
                        <div className="sku_name">
                            {/* A balanced introduction to Computer Science */}
                            {book.title}
                        </div>
                        <div className='sku_author'>
                            {/* By Reed, David */}
                            By {book.author}
                        </div>
                        <div className="summary">
                            <dl className="summary_price">
                                <dt>Price</dt>
                                <dd>
                                    <i className="price">$ {book.price} </i>
                                    <a href="#">List Price: <i>$29.99</i></a>
                                </dd>
                            </dl>
                            <dl className="summary_introduction">
                                <dt>Preview</dt>
                                <dd>
                                    {/* A Balanced Introduction to Computer Science, This book is ideal for Introduction to Computing and the Web courses in departments of Math and Computer Science.
                                    This thoughtfully written text uses the Internet as a central theme, studying its history, technology, and current use. Experimental problems use Web-based tools, enabling students to learn programming fundamentals by developing their own interactive Web pages with HTML and JavaScript. Integrating breadth-based and depth-based chapters,
                                    Reed covers a broad range of topics balanced with programming depth in a hands-on, tutorial style. */}
                                    {book.description}
                                </dd>
                            </dl>
                            <dl className="summary_promotion">
                                <dt>Promotion</dt>
                                <dd>
                                    <em>Sales!</em> Use coupon code: NEWSTART to get 10% off discount

                                </dd>
                            </dl>
                            < OrderAdd book={book} createOrder={props.createOrder} />
                            {/* <button>Buy Now</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </ReactRouterDOM.Route>
        // </React.Fragment>
    );
}



function Detailpages(props) {
    const books = props.books.map(book => <Detailpage key={book.id} book={book} createOrder={props.createOrder} />)
    console.log("Hello", books)
    return (
        <ReactRouterDOM.Switch>
            {books}
        </ReactRouterDOM.Switch>
    )
}


// 6. AddBook Page
class AddBookPage extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
        this.state = { img: "" }
    }
    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.bookAdd;
        const book = {
            title: form.bk_title.value,
            author: form.bk_author.value,
            price: form.bk_price.value,
            category: form.bk_category.value,
            course: form.bk_course.value,
            description: form.bk_des.value,
            photo: form.bk_photo.value,
        }
        this.props.createBook(book);
        form.bk_title.value = ""; form.bk_author.value = ""; form.bk_price.value = 0; form.bk_category.value = "", form.bk_course.value = "", form.bk_des.value = "", form.bk_photo.value = "";
    }

    handlerChange() {
        const that = this
        const file = document.getElementById('file').files[0]
        if (file.type !== 'image/png') {
            alert('please upload a png picture')
            return
        }
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (result) {
            console.log(this.result)
            that.setState({
                img: this.result
            })
        }

    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="ab_container w">
                    <h1> Add a new book</h1>
                    <form name="bookAdd" onSubmit={this.handleSubmit}>
                        <p>Title: <input type="text" id="bk_title" /></p>
                        <p>Author: <input type="text" id="bk_author" /></p>
                        <p>Price: <input type="text" id="bk_price" /></p>
                        <p>Category: <input type="text" id="bk_category" /></p>
                        <p>Course: <input type="text" id="bk_course" /></p>

                        <div className="description">
                            <p>Description: </p>
                            <textarea type="text" id="bk_des"></textarea>
                            {/* <div className="bk_des" ref="bk_des" contentEditable="true"></div> */}
                        </div >
                        <div className="photo">
                            <p>Post Photo:</p>
                            <input type="text" id="bk_photo" />
                            {/* <p>Photo by file test:</p>
                        <input type="file" id="file" accept="/image*" onChange={this.handlerChange}/>
                        <img src={this.state.img} style = {{width='50px'},{float:'left'}} ></img> */}
                        </div>
                        <p></p>
                        <button>Submit a book</button>
                    </form>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}


// 7. My order page
function OrderRow(props) {
    const order = props.order;
    if (order.status == "Delivered")
        return (
            <tr>
                <td>{order.id}</td>
                <td>{order.booktitle}</td>
                <td>{order.created ? order.created.toDateString() : ''}</td>
                <td>{order.status}</td>
                <td><button onClick={() => { window.location.href = "/#/review" }}>Add a review</button></td>
            </tr>
        )
    else if (order.status == "Rated")
        return (
            <tr>
                <td>{order.id}</td>
                <td>{order.booktitle}</td>
                <td>{order.created ? order.created.toDateString() : ''}</td>
                <td>{order.status}</td>
                <td>Submitted</td>
            </tr>
        )
    else
        return (
            <tr>
                <td>{order.id}</td>
                <td>{order.booktitle}</td>
                <td>{order.created ? order.created.toDateString() : ''}</td>
                <td>{order.status}</td>
                <td>Unable to add review</td>
            </tr>
        );
}

function OrderTable(props) {
    const orderRows = props.orders.map(order =>
        <OrderRow key={order.id} order={order} />
    );

    return (
        <div className="od_table_container">
            <table className="od_table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book</th>
                        <th>Created Date</th>
                        <th>Status</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {orderRows}
                </tbody>
            </table>
        </div>
    );
}
function OrderPage(props) {
    const orders = props.orders
    return (
        <React.Fragment>
            <Header />
            <div className="od_container w">
                <h1> My Orders</h1>
                <OrderTable orders={orders} />
            </div>
            <Footer />
        </React.Fragment>
    )
}

// 8. Review Page
// Star Component
function Star({ marked, starId }) {
    return (
        <span star-id={starId} style={{ color: "#ff9933" }} role="button">
            {marked ? "\u2605" : "\u2606"}
        </span>
    );
}


// Star Rating
function StarRating(props) {
    // rating display
    const [rating, setRating] = React.useState(
        typeof props.rating == "number" ? props.rating : 0
    );
    // hover setting
    const [selection, setSelection] = React.useState(0);
    const hoverOver = event => {
        let val = 0;
        if (event && event.target && event.target.getAttribute("star-id"))
            val = event.target.getAttribute("star-id");
        setSelection(val);
    };
    // console.log(rating)
    const handleClick = event => {
        setRating(event.target.getAttribute("star-id") || rating);
        props.getRating(rating);
    }
    return (
        <div
            // hover setting
            onMouseOut={() => hoverOver(null)}
            // click to choose rating
            onClick={handleClick}
            onMouseOver={hoverOver}
        >
            {/* create 5 components */}
            {Array.from({ length: 5 }, (v, i) => (
                <Star
                    starId={i + 1}
                    key={`star_${i + 1} `}
                    marked={selection ? selection >= i + 1 : rating >= i + 1}
                />
            ))}
        </div>
    );
}


class Review extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: 0,
        };
        this.getRating = this.getRating.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    getRating(rating) {
        // console.log("hi")
        console.log(rating)
        this.setState({ rating: rating });
    }
    handleAdd(e) {
        e.preventDefault();
        const form = document.forms.reviewToAdd;
        const review = {
            rating: this.state.rating, content: form.content.value,
        }
        review.buyerid = 1
        review.orderid = 1
        console.log(review);
        this.props.createReview(review);
        form.content.value = "";
    }
    render() {
        return (
            <div className="r_container w">
                <h1> Write a Review</h1>
                <form name="reviewToAdd" onSubmit={this.handleAdd}>
                    <p>Rate </p>
                    <StarRating getRating={this.getRating} />

                    <div className="comment">
                        <p>Comment: </p>
                        <textarea name="content" type="text" id="cm"></textarea>
                        {/* <div className="bk_des" ref="bk_des" contentEditable="true"></div> */}
                    </div >

                    <div onFocus={this.handleFocus} onBlur={this.handleBlur} className="comment" ref="comment_in" contentEditable="true"></div>
                    <div className="photo">
                        <p>Picture/Video(Optional)</p>
                        <input type="file" />
                    </div>

                    <p></p>
                    <button>Submit Review</button>
                </form>

            </div>

        )
    }
}

class ReviewPage extends React.Component {
    render() {
        const createReview = this.props.createReview;
        // this.createReview = this.createReview.bind(this);
        return (
            // display &&
            <React.Fragment>
                <Header />
                <Review createReview={createReview} />
                <Footer />
            </React.Fragment>
        )
    }
}

async function graphQLFetch(query, variables = {}) {
    try {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables })
        });
        const body = await response.text();
        const result = JSON.parse(body, jsonDateReviver);

        if (result.errors) {
            const error = result.errors[0];
            if (error.extensions.code == 'BAD_USER_INPUT') {
                const details = error.extensions.exception.errors.join('\n ');
                alert(`${error.message}:\n ${details}`);
            } else {
                alert(`${error.extensions.code}: ${error.message}`);
            }
        }
        return result.data;
    } catch (e) {
        alert(`Error in sending data to server: ${e.message}`);
    }
}

// 9. System page
class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            users: [],
            currentUser: {},
            orders: [],
        };
        this.createBook = this.createBook.bind(this);
        this.createUser = this.createUser.bind(this);
        this.checkUser = this.checkUser.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.createReview = this.createReview.bind(this);

    }

    componentDidMount() {
        this.loadBookData();
        this.loadUserData();
        this.loadOrderData();
    }

    async loadUserData() {
        const query = `query {
            userList {
                _id name email phone password purchase sell
            }
        }`;

        const data = await graphQLFetch(query);
        // console.log(data.userList)
        if (data) {
            this.setState({ users: data.userList });
            console.log(data.userList)
        }
    }

    async createUser(user) {
        const query = `mutation userAdd($user: UserInputs!) {
          userAdd(user: $user)
        }`;
        const data = await graphQLFetch(query, { user });
        // this.loadData();
        // console.log(data);
        if (data.userAdd == "Done") {
            alert("Your registration is successful!");
        }
        else if (data.userAdd == "duplicated") {
            alert("The email address has been used, please choose another email")
        }
    }

    async checkUser(user) {
        const query = `mutation userCheck($user: UserCheckInputs!) {
            userCheck(user: $user)
        }`;
        const data = await graphQLFetch(query, { user });
        // this.loadData();
        // console.log(data);
        if (data.userCheck == "notmatch") {
            alert("Password doesn't match!");
        }
        else if (data.userCheck == "match") {
            window.location.href = "http://localhost:3000/#/homepage";
            alert("You are successfully logged in")
        }
    }

    async loadBookData() {
        const query = `query {
          bookList {
            id title author price description
            category course photo sellerid
          }
        }`;

        const data = await graphQLFetch(query);
        if (data) {
            this.setState({ books: data.bookList });
        }
    }

    async createBook(book) {
        const query = `mutation bookAdd($book: BookInputs!) {
          bookAdd(book: $book) {
            _id
          }
        }`;

        const data = await graphQLFetch(query, { book });
        if (data) {
            this.loadBookData();
            alert("Add successfully!")
        }

    }

    async loadOrderData() {
        const query = `query {
          orderList {
            id booktitle buyerid status created
          }
        }`;

        const data = await graphQLFetch(query);
        if (data) {
            this.setState({ orders: data.orderList });
        }
    }

    async createOrder(order) {
        const query = `mutation orderAdd($order: OrderInputs!) {
          orderAdd(order: $order) {
            _id
          }
        }`;

        const data = await graphQLFetch(query, { order });
        if (data) {
            this.loadOrderData();
            alert("Purchase successfully!")
        }
    }

    async createReview(review) {
        const query = `mutation reviewAdd($review: ReviewInputs!) {
          reviewAdd(review: $review)
        }`;
        const data = await graphQLFetch(query, { review });

        if (data.reviewAdd == "Done") {
            alert("Your review is successful!");
        }
        // else if (data.userAdd == "duplicated") {
        //     alert("The email address has been used, please choose another email")
        // }
    }

    render() {
        return (
            <React.Fragment>
                <ReactRouterDOM.Switch>
                    <ReactRouterDOM.Redirect exact from="/" to="/homepage" />
                    <ReactRouterDOM.Route path="/homepage">
                        <Homepage books={this.state.books} />
                    </ReactRouterDOM.Route>
                    <ReactRouterDOM.Route path="/detail">
                        <Detailpages books={this.state.books} createOrder={this.createOrder} />
                    </ReactRouterDOM.Route>
                    <ReactRouterDOM.Route path="/signup">
                        <Signup createUser={this.createUser} />
                    </ReactRouterDOM.Route>
                    <ReactRouterDOM.Route path="/login">
                        <Login checkUser={this.checkUser} />
                    </ReactRouterDOM.Route>
                    <ReactRouterDOM.Route path="/order">
                        <OrderPage orders={this.state.orders} />
                    </ReactRouterDOM.Route>
                    <ReactRouterDOM.Route path="/review">
                        <ReviewPage createReview={this.createReview} />
                    </ReactRouterDOM.Route>
                    <ReactRouterDOM.Route path="/addbook">
                        <AddBookPage createBook={this.createBook} />
                    </ReactRouterDOM.Route>
                </ReactRouterDOM.Switch>
            </React.Fragment>
        )
    }
}


const element = (
    <ReactRouterDOM.HashRouter>
        <Index />
    </ReactRouterDOM.HashRouter>)

ReactDOM.render(
    element,
    document.getElementById('content')
);
