function runcommand(cmd) 
    local fout = assert(io.popen(cmd, 'r')) 
    local str = assert(fout:read('*a')) 
    fout:close() 
    return str 
end 

local sout=runcommand("dvisvgm --help") 
local marg = assert(io.open("command.txt","w")) 
marg:write(sout) 
marg:flush() 
marg:close() 


