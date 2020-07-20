`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date:    16:36:31 07/20/2020 
// Design Name: 
// Module Name:    bin27SD 
// Project Name: 
// Target Devices: 
// Tool versions: 
// Description: 
//
// Dependencies: 
//
// Revision: 
// Revision 0.01 - File Created
// Additional Comments: 
//
//////////////////////////////////////////////////////////////////////////////////
module bin27SD(
    input I0,
	 input I1,
	 input I2,
	 input I3,
	 
    output a,
    output b,
    output c,
    output d,
    output e,
    output f,
    output g,
	 
	 output an0,
	 output an1,
	 output an2,
	 output an3
    );
	 
	 
	 assign an0 = 0;
	 assign an1 = 0;
	 assign an2 = 0;
	 assign an3 = 0;
	 
	 
	 
	 
	 assign a = ~I3 & ~I2 & ~I1 & I0 | ~I3 & I2 & ~I1 & ~I0 | I3 & ~I2 & I1 & I0 | I3 & I2 & ~I1 & I0;
	 assign b = ~I3 & I2 & ~I1 & I0 | I2 & I1 & ~I0 | I3 & I1 & I0 | I3 & I2 & ~I0;
	 assign c = ~I3 & ~I2 & I1 & ~I0 | I3 & I2 & ~I0 | I3 & I2 & I1;
	 assign d =  ~I3 & ~I2 & ~I1 & I0 | ~I3 & I2 & ~I1 & ~I0 | I2 & I1 & I0 | I3 & ~I2 & I1 & ~I0;
	 assign e =  ~I3 & I0 | ~I2 & ~I1 & I0 | ~I3 & I2 & ~I1;
    assign f =  ~I3 & ~I2 & I0 | ~I3 & ~I2 & I1 | ~I3 & I1 & I0 | I3 & I2 & ~I1 & I0;
    assign g =  ~I3 & ~I2 & ~I1 | ~I3 & I2 & I1 & I0 | I3 & I2 & ~I1 & ~I0;


endmodule
