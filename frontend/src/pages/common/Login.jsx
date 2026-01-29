import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="card shadow-sm border-0">
						<div className="card-body p-4">
							<h3 className="fw-bold mb-3">Login</h3>
							<p className="text-muted mb-4">Access your dashboard</p>

							<form onSubmit={(e) => e.preventDefault()}>
								<div className="mb-3">
									<label className="form-label">Email</label>
									<input type="email" className="form-control" placeholder="you@example.com" />
								</div>
								<div className="mb-3">
									<label className="form-label">Password</label>
									<input type="password" className="form-control" placeholder="••••••••" />
								</div>
								<button className="btn btn-dark w-100">Login</button>
							</form>

							<div className="text-center mt-3">
								<small className="text-muted">No account? </small>
								<Link to="/register">Create one</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

