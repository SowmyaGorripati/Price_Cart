import "./styles.css";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="head">
        <h2>Bootstrap Responsive Pricing Table Snippet</h2>
        <h6>Pricing Table with Custom Hover Effects and Buttons</h6>
      </div>
      <div className="row">
        <div className="col">
          <section className="pricing py-5">
            <div className="row">
              <Free />
              <Plus />
              <Pro />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function Free() {
  return (
    <div className="col-lg-4">
      <div className="card-mb-5 mb-lg-0">
        <div className="card-body">
          <h2 className="card-title text-muted text-center text-uppercase text-muted">
            Free
          </h2>
          <h6 className="card-price text-center">
            $0<span className="period">/month</span>
          </h6>
          <hr />

          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Single User
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              5GB Storage
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Community Access
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              Unlimited Private Projects
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              Dedicated Phone Support
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              Free Subdomain
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              Monthly Status Reports
            </li>
          </ul>
          <div className="d-grid">
            <a href="*" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="col-lg-4">
      <div className="card-mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-center text-uppercase">
            Plus
          </h5>
          <h6 className="card-price text-center">
            $9<span className="period">/month</span>
          </h6>
          <hr />

          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              <strong>5 Users</strong>
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              50GB Storage
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Community Access
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Unlimited Private Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Dedicated Phone Support
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Free Subdomain
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fa fa-times"></i>
              </span>
              Monthly Status Reports
            </li>
          </ul>
          <div className="d-grid">
            <a href="*" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pro() {
  return (
    <div className="col-lg-4">
      <div className="card-mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-center text-uppercase">
            Pro
          </h5>
          <h6 className="card-price text-center">
            $49<span className="period">/month</span>
          </h6>
          <hr />

          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              <strong>Unlimited Users</strong>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              150GB Storage
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Community Access
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Unlimited Private Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Dedicated Phone Support
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              <strong>Unlimited </strong>Free Subdomain
            </li>
            <li>
              <span className="fa-li">
                <i className="fa fa-check"></i>
              </span>
              Monthly Status Reports
            </li>
          </ul>
          <div className="d-grid">
            <a href="*" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
