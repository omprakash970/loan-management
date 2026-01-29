import { Link } from "react-router-dom";

export default function Register() {
	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-7 col-lg-6">
					<div className="card shadow-sm border-0">
						<div className="card-body p-4">
							<h3 className="fw-bold mb-3">Create Account</h3>
							<p className="text-muted mb-4">Join LoanFlow in a minute</p>

							<form onSubmit={(e) => e.preventDefault()}>
								<div className="row g-3">
									<div className="col-md-6">
										<label className="form-label">First name</label>
										<input className="form-control" placeholder="Ada" />
									</div>
									<div className="col-md-6">
										<label className="form-label">Last name</label>
										<input className="form-control" placeholder="Lovelace" />
									</div>
									<div className="col-12">
										<label className="form-label">Email</label>
										<input type="email" className="form-control" placeholder="you@example.com" />
									</div>
									<div className="col-12">
										<label className="form-label">Password</label>
										<input type="password" className="form-control" placeholder="••••••••" />
									</div>
								</div>
								<button className="btn btn-warning mt-4 w-100 fw-semibold">Create account</button>
							</form>

							<div className="text-center mt-3">
								<small className="text-muted">Already have an account? </small>
								<Link to="/login">Login</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

