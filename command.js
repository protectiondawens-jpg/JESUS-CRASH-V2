var commands = [];

function cmd(info, func) {
    // Basic validation
    if (!info || typeof info !== 'object') {
        throw new Error('First parameter "info" must be an object');
    }
    if (typeof func !== 'function') {
        throw new Error('Second parameter "func" must be a function');
    }
    
    // Create copy to avoid modifying original object
    var data = { ...info };
    
    // Required properties
    if (!data.pattern && !data.on) {
        console.warn('⚠️ Command without "pattern" or "on":', data.filename || 'Unknown');
    }
    
    // Default values
    data.function = func;
    data.dontAddCommandList = data.dontAddCommandList || false;
    data.desc = data.desc || '';
    data.fromMe = data.fromMe || false;
    data.category = data.category || 'misc';
    data.filename = data.filename || "Not Provided";
    
    // Properties that main code may expect
    data.alias = data.alias || [];           // For command aliases
    data.react = data.react || null;         // For emoji reaction
    
    commands.push(data);
    return data;
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands,
};
