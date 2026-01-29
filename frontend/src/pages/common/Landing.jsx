import React from 'react'

export default function Landing() {
	return (
		<div className="landing-hero d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
			<div className="hero-card text-center">
				<h1 className="text-3xl font-bold mb-3">Loan Management</h1>
				<p className="text-gray-600">Modern UI powered by Tailwind CSS + Bootstrap.</p>
				<div className="mini-stat mt-3">
					<span className="badge text-bg-warning">Setup complete</span>
				</div>
			</div>
		</div>
	)
}
