import React from 'react';
import './SidebarBrand.css';

const SidebarBrand = () => {
    return (
        <div className="col-md-4 d-none d-md-block sidebar-brand">
            <div className="sidebar-content">
                {/* Logo and Brand Section */}
                <div className="brand-section">
                    <div className="logo-container">
                        <i className="bi bi-card-checklist"></i>
                        <h4>To-do App</h4>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="features-section">
                    <h2>Get things done.</h2>
                    <p className="feature-text">Tasks, deadlines, and team progress in one place.</p>

                    <div className="feature-items">
                        <div className="feature-item">
                            <i className="bi bi-check2-circle"></i>
                            <span>Task lists that stay current</span>
                        </div>
                        <div className="feature-item">
                            <i className="bi bi-calendar-check"></i>
                            <span>Deadline tracking across teams</span>
                        </div>
                        <div className="feature-item">
                            <i className="bi bi-graph-up"></i>
                            <span>Progress you can actually read</span>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="sidebar-footer">
                    <p>© 2025 To-do App. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default SidebarBrand;