## MANDATORY GROUND RULES (Highest Priority - Non-Optional)

The following principles are absolutely mandatory and non-optional for all code and documentation in this project and must be enforced by all AI agents:

Library-First Development: Prioritize using established, well-tested libraries before implementing custom solutions to minimize code volume and maximize reliability
Built-in Utilization: Leverage built-in functions and framework features before creating custom implementations
Custom Implementation Restraint: Only create custom code when libraries and built-ins cannot meet specific requirements
DRY (Don't Repeat Yourself): Eliminate all code duplication through reusable functions, components, and modules when it improves customer experience
OOP (Object-Oriented Programming): Utilize OOP principles for code organization and modularity, including encapsulation, inheritance, and polymorphism - ONLY when they enhance customer experience
SOLID Principles: Follow SOLID design principles when they improve customer-facing functionality, but customer experience takes priority
KISS (Keep It Simple, Stupid): Strive for simplicity in design and implementation that benefits the customer, not just the developer
YAGNI (You Aren't Gonna Need It): Avoid over-engineering and unnecessary features - only implement features that directly enhance customer value
Zero Redundancy: Remove all duplicate code, logic, and functionality that doesn't enhance customer experience
Zero Dead Code: Eliminate all unused, unreachable, or commented-out code that doesn't serve customers
Zero Inconsistency: Maintain consistent patterns, naming conventions, and implementation approaches in customer-facing interfaces and experiences
Minimal Code Volume: Keep codebase as small and concise as possible without sacrificing readability while prioritizing customer experience features
Lowest Possible Cyclomatic Complexity: Simplify code logic to reduce complexity while ensuring customer-focused responsiveness
O(1) Time-Complexity: Strive for constant-time operations on ALL paths where possible, and O (log n) where not possible. Use the best DSA.
Modularization and Decomposition: Break down large functions and classes into smaller, focused modules to optimize customer experience
Hyper-Efficiency: Optimize for maximum performance and minimal resource usage to enhance customer experience
Customer Experience-First: All technical decisions must serve customer experience first (CUSTOMER IS KING)
User-Centric Design: Focus on delivering a seamless and intuitive user experience. The frontend is the user's reality - design it first, then build the backend to support it.
Zero-Latency: Optimize for sub-50ms perceived customer interaction latency for seamless experience
Scalability & Maintainability: Design systems to handle growth while remaining easy to understand, modify, and extend
Cloud Native Principles: Adhere to cloud-native principles ensuring scalability, resilience, and efficient resource utilization
Extreme Worst-Case Scenario Handling: All implementations must be robust and capable of handling extreme worst scenarios without failure
No Deferred Decisions: All customer-facing decisions must be made upfront
No Loose Ends: Every feature, functionality, and component must be fully implemented and integrated
No Lazy Implementations: All implementations must be thorough and complete
No Temporary Fixes: All fixes and solutions must be permanent and robust
No Procrastination: All tasks and deliverables must be complete without delays
No Half-Measures: All implementations must be comprehensive and fully address customer requirements
Zero-Tolerance for Bugs: All code must be thoroughly tested and verified to be free of bugs before deployment
No Hardcoding: All customer-facing values, configurations, and settings must be dynamic and configurable
Environment Variables: All values come from environment variables (no hardcoded values)
Performance Requirements: Optimize customer-perceived performance over system performance metrics
Validation Strategy: Client validation first for immediate customer feedback, backend validation for security
Error Handling: Graceful degradation with customer-friendly messaging
Mobile-First Design: Optimize for mobile customer interactions as primary use case
Fast Loading: Under 3-second load times for all customer interactions
Customer-First Selection: Use the most efficient technology for customer experience first, regardless of paradigm
State Management: Proper server state and client state with optimistic updates
Required Tools: Use uv and uvx for Python, bun and bunx for JavaScript operations exclusively
No Git Commands: AI agents are strictly prohibited from executing any Git commands

All AI agents working with this codebase must ensure these principles are followed without exception.