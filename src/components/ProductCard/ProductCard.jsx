import React from "react";
import { Badge } from "react-bootstrap";

function ProductCard({ img }) {
  return (
    <div style={{ flexBasis: "0px", maxWidth: "319px", cursor: "pointer" }}>
      <div className="card product-card border shadow-none">
        <img
          src={img}
          className="card-img-top product-img w-75 m-auto"
          alt="Ghar Soaps Magic De-Tan Face Wash"
        />

        <div className="card-body px-3 pt-2 pb-3">
          <span className="timer-badge d-inline-flex align-items-center gap-1 px-2 py-1">
            <i className="bi bi-stopwatch-fill"></i> 19h : 47m : 12s
          </span>

          <div className="d-flex align-items-center justify-content-between gap-2 mt-3">
            <h6 className="product-title text-truncate mb-0">
              Ghar Soaps Magic De-Tan Face Wash
            </h6>
            <span className="mall-badge flex-shrink-0 px-2 py-1">
              <span className="m">M</span>all
            </span>
          </div>

          <div className="d-flex align-items-baseline gap-2 mt-3">
            <span className="price">₹301</span>
            <del className="mrp">₹499</del>
            <span className="discount">40% off</span>
          </div>

          <div className="d-flex align-items-center gap-2 mt-3">
            <Badge
              className="badge-green p-1 rounded-5"
              style={{
                width: "57px",
                fontSize: "1rem",
                lineHeight: "20px",
                letterSpacing: "0.5px",
                fontWeight: 600,
                backgroundColor: "#038d63",
              }}
            >
              4.2
            </Badge>
            <span className="reviews">70038 Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
