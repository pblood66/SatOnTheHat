# Satellite Projection

## Satellite.js

The steps to track satellites from TLE datasets is

1. Initialize Satellite Record
2. Propogate the Satellite Record into an ECI (Earth Centered Inertial) Coordinate Frame
3. Transform the Coordinates into something useful like ECF (Earth Centered Fixed coordinates) and Look Angles

In order to calculate the positions of thousands of satellites, the Bulk Propogator API will be needed. 