let wasm;

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            wasm.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}
/**
*/
class Block {

    static __wrap(ptr) {
        const obj = Object.create(Block.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_block_free(ptr);
    }
    /**
    * @returns {Fingerprint}
    */
    id() {
        var ret = wasm.block_id(this.ptr);
        return Fingerprint.__wrap(ret);
    }
    /**
    * @returns {Fingerprint}
    */
    signer() {
        var ret = wasm.block_signer(this.ptr);
        return Fingerprint.__wrap(ret);
    }
    /**
    * @returns {Uint32Array}
    */
    parentIds() {
        wasm.block_parentIds(8, this.ptr);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayU32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4);
        return v0;
    }
    /**
    * @returns {string}
    */
    export() {
        try {
            wasm.block_export(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} s
    * @returns {Block}
    */
    static import(s) {
        var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.block_import(ptr0, len0);
        return Block.__wrap(ret);
    }
}
/**
*/
class BlockBuilder {

    static __wrap(ptr) {
        const obj = Object.create(BlockBuilder.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_blockbuilder_free(ptr);
    }
    /**
    * @param {Payload} payload
    */
    addPayload(payload) {
        _assertClass(payload, Payload);
        var ptr0 = payload.ptr;
        payload.ptr = 0;
        wasm.blockbuilder_addPayload(this.ptr, ptr0);
    }
    /**
    * @param {PrivateKey} sk
    * @returns {Block}
    */
    build(sk) {
        var ptr = this.ptr;
        this.ptr = 0;
        _assertClass(sk, PrivateKey);
        var ret = wasm.blockbuilder_build(ptr, sk.ptr);
        return Block.__wrap(ret);
    }
}
/**
*/
class EntanglementProof {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_entanglementproof_free(ptr);
    }
}
/**
*/
class Fingerprint {

    static __wrap(ptr) {
        const obj = Object.create(Fingerprint.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_fingerprint_free(ptr);
    }
    /**
    * @returns {string}
    */
    export() {
        try {
            wasm.fingerprint_export(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} s
    * @returns {Fingerprint}
    */
    static import(s) {
        var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.fingerprint_import(ptr0, len0);
        return Fingerprint.__wrap(ret);
    }
}
/**
*/
class Game {

    static __wrap(ptr) {
        const obj = Object.create(Game.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_game_free(ptr);
    }
    /**
    * @param {PrivateKey} sk
    * @returns {Game}
    */
    static new(sk) {
        _assertClass(sk, PrivateKey);
        var ptr0 = sk.ptr;
        sk.ptr = 0;
        var ret = wasm.game_new(ptr0);
        return Game.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    blockCount() {
        var ret = wasm.game_blockCount(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    playerCount() {
        var ret = wasm.game_playerCount(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {boolean}
    */
    joined() {
        var ret = wasm.game_joined(this.ptr);
        return ret !== 0;
    }
    /**
    * @returns {BlockBuilder}
    */
    buildBlock() {
        var ret = wasm.game_buildBlock(this.ptr);
        return BlockBuilder.__wrap(ret);
    }
    /**
    * @param {BlockBuilder} builder
    * @returns {Block}
    */
    addBlock(builder) {
        _assertClass(builder, BlockBuilder);
        var ptr0 = builder.ptr;
        builder.ptr = 0;
        var ret = wasm.game_addBlock(this.ptr, ptr0);
        return Block.__wrap(ret);
    }
    /**
    * @param {string} name
    * @returns {Block}
    */
    join(name) {
        var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.game_join(this.ptr, ptr0, len0);
        return Block.__wrap(ret);
    }
    /**
    * @returns {Fingerprint}
    */
    fingerprint() {
        var ret = wasm.game_fingerprint(this.ptr);
        return Fingerprint.__wrap(ret);
    }
    /**
    * @returns {Fingerprint}
    */
    playerFingerprint() {
        var ret = wasm.game_playerFingerprint(this.ptr);
        return Fingerprint.__wrap(ret);
    }
}
/**
*/
class Mask {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_mask_free(ptr);
    }
}
/**
*/
class MaskProof {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_maskproof_free(ptr);
    }
}
/**
*/
class Payload {

    static __wrap(ptr) {
        const obj = Object.create(Payload.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_payload_free(ptr);
    }
    /**
    * @returns {Fingerprint}
    */
    id() {
        var ret = wasm.payload_id(this.ptr);
        return Fingerprint.__wrap(ret);
    }
    /**
    * @param {string} name
    * @param {PublicKey} pk
    * @returns {Payload}
    */
    static publishKey(name, pk) {
        var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(pk, PublicKey);
        var ptr1 = pk.ptr;
        pk.ptr = 0;
        var ret = wasm.payload_publishKey(ptr0, len0, ptr1);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Stack} stk
    * @returns {Payload}
    */
    static openStack(stk) {
        _assertClass(stk, Stack);
        var ptr0 = stk.ptr;
        stk.ptr = 0;
        var ret = wasm.payload_openStack(ptr0);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Fingerprint} id
    * @param {Stack} stk
    * @param {Uint32Array} proofs
    * @returns {Payload}
    */
    static maskStack(id, stk, proofs) {
        _assertClass(id, Fingerprint);
        var ptr0 = id.ptr;
        id.ptr = 0;
        _assertClass(stk, Stack);
        var ptr1 = stk.ptr;
        stk.ptr = 0;
        var ptr2 = passArray32ToWasm0(proofs, wasm.__wbindgen_malloc);
        var len2 = WASM_VECTOR_LEN;
        var ret = wasm.payload_maskStack(ptr0, ptr1, ptr2, len2);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Fingerprint} id
    * @param {Stack} stk
    * @param {ShuffleProof} proof
    * @returns {Payload}
    */
    static shuffleStack(id, stk, proof) {
        _assertClass(id, Fingerprint);
        var ptr0 = id.ptr;
        id.ptr = 0;
        _assertClass(stk, Stack);
        var ptr1 = stk.ptr;
        stk.ptr = 0;
        _assertClass(proof, ShuffleProof);
        var ptr2 = proof.ptr;
        proof.ptr = 0;
        var ret = wasm.payload_shuffleStack(ptr0, ptr1, ptr2);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Fingerprint} id
    * @param {Stack} stk
    * @param {RotationProof} proof
    * @returns {Payload}
    */
    static rotateStack(id, stk, proof) {
        _assertClass(id, Fingerprint);
        var ptr0 = id.ptr;
        id.ptr = 0;
        _assertClass(stk, Stack);
        var ptr1 = stk.ptr;
        stk.ptr = 0;
        _assertClass(proof, RotationProof);
        var ptr2 = proof.ptr;
        proof.ptr = 0;
        var ret = wasm.payload_rotateStack(ptr0, ptr1, ptr2);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Fingerprint} id
    * @param {string} name
    * @returns {Payload}
    */
    static nameStack(id, name) {
        _assertClass(id, Fingerprint);
        var ptr0 = id.ptr;
        id.ptr = 0;
        var ptr1 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = wasm.payload_nameStack(ptr0, ptr1, len1);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Fingerprint} id1
    * @param {Uint32Array} indices
    * @param {Fingerprint} id2
    * @returns {Payload}
    */
    static takeStack(id1, indices, id2) {
        _assertClass(id1, Fingerprint);
        var ptr0 = id1.ptr;
        id1.ptr = 0;
        var ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        _assertClass(id2, Fingerprint);
        var ptr2 = id2.ptr;
        id2.ptr = 0;
        var ret = wasm.payload_takeStack(ptr0, ptr1, len1, ptr2);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Uint32Array} ids
    * @param {Fingerprint} id
    * @returns {Payload}
    */
    static pileStacks(ids, id) {
        var ptr0 = passArray32ToWasm0(ids, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(id, Fingerprint);
        var ptr1 = id.ptr;
        id.ptr = 0;
        var ret = wasm.payload_pileStacks(ptr0, len0, ptr1);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Fingerprint} id
    * @param {Uint32Array} shares
    * @param {Uint32Array} proofs
    * @returns {Payload}
    */
    static publishShares(id, shares, proofs) {
        _assertClass(id, Fingerprint);
        var ptr0 = id.ptr;
        id.ptr = 0;
        var ptr1 = passArray32ToWasm0(shares, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = passArray32ToWasm0(proofs, wasm.__wbindgen_malloc);
        var len2 = WASM_VECTOR_LEN;
        var ret = wasm.payload_publishShares(ptr0, ptr1, len1, ptr2, len2);
        return Payload.__wrap(ret);
    }
    /**
    * @param {string} name
    * @param {string} spec
    * @returns {Payload}
    */
    static randomSpec(name, spec) {
        var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(spec, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = wasm.payload_randomSpec(ptr0, len0, ptr1, len1);
        return Payload.__wrap(ret);
    }
    /**
    * @param {string} name
    * @param {Mask} entropy
    * @returns {Payload}
    */
    static randomEntropy(name, entropy) {
        var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(entropy, Mask);
        var ptr1 = entropy.ptr;
        entropy.ptr = 0;
        var ret = wasm.payload_randomEntropy(ptr0, len0, ptr1);
        return Payload.__wrap(ret);
    }
    /**
    * @param {string} name
    * @param {SecretShare} share
    * @param {SecretShareProof} proof
    * @returns {Payload}
    */
    static randomReveal(name, share, proof) {
        var ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(share, SecretShare);
        var ptr1 = share.ptr;
        share.ptr = 0;
        _assertClass(proof, SecretShareProof);
        var ptr2 = proof.ptr;
        proof.ptr = 0;
        var ret = wasm.payload_randomReveal(ptr0, len0, ptr1, ptr2);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Uint32Array} ids1
    * @param {Uint32Array} ids2
    * @param {EntanglementProof} proof
    * @returns {Payload}
    */
    static proveEntanglement(ids1, ids2, proof) {
        var ptr0 = passArray32ToWasm0(ids1, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray32ToWasm0(ids2, wasm.__wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        _assertClass(proof, EntanglementProof);
        var ptr2 = proof.ptr;
        proof.ptr = 0;
        var ret = wasm.payload_proveEntanglement(ptr0, len0, ptr1, len1, ptr2);
        return Payload.__wrap(ret);
    }
    /**
    * @param {string} s
    * @returns {Payload}
    */
    static text(s) {
        var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.payload_text(ptr0, len0);
        return Payload.__wrap(ret);
    }
    /**
    * @param {Uint8Array} b
    * @returns {Payload}
    */
    static bytes(b) {
        var ptr0 = passArray8ToWasm0(b, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.payload_bytes(ptr0, len0);
        return Payload.__wrap(ret);
    }
}
/**
*/
class PrivateKey {

    static __wrap(ptr) {
        const obj = Object.create(PrivateKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_privatekey_free(ptr);
    }
    /**
    * @returns {PrivateKey}
    */
    static random() {
        var ret = wasm.privatekey_random();
        return PrivateKey.__wrap(ret);
    }
    /**
    * @returns {PublicKey}
    */
    publicKey() {
        var ret = wasm.privatekey_publicKey(this.ptr);
        return PublicKey.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    export() {
        try {
            wasm.privatekey_export(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} s
    * @returns {PrivateKey}
    */
    static import(s) {
        var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.privatekey_import(ptr0, len0);
        return PrivateKey.__wrap(ret);
    }
}
/**
*/
class PublicKey {

    static __wrap(ptr) {
        const obj = Object.create(PublicKey.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_publickey_free(ptr);
    }
    /**
    * @returns {Fingerprint}
    */
    fingerprint() {
        var ret = wasm.publickey_fingerprint(this.ptr);
        return Fingerprint.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    export() {
        try {
            wasm.publickey_export(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} s
    * @returns {PublicKey}
    */
    static import(s) {
        var ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = wasm.publickey_import(ptr0, len0);
        return PublicKey.__wrap(ret);
    }
}
/**
*/
class RotationProof {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_rotationproof_free(ptr);
    }
}
/**
*/
class SecretShare {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_secretshare_free(ptr);
    }
}
/**
*/
class SecretShareProof {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_secretshareproof_free(ptr);
    }
}
/**
*/
class ShuffleProof {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_shuffleproof_free(ptr);
    }
}
/**
*/
class Stack {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_stack_free(ptr);
    }
    /**
    * @returns {Fingerprint}
    */
    id() {
        var ret = wasm.stack_id(this.ptr);
        return Fingerprint.__wrap(ret);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {

        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = import.meta.url.replace(/\.js$/, '_bg.wasm');
    }
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        var ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_getRandomValues_4e0354b1f3d14f64 = handleError(function(arg0, arg1, arg2) {
        var ret = getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_instanceof_Window_17fdb5cd280d476d = function(arg0) {
        var ret = getObject(arg0) instanceof Window;
        return ret;
    };
    imports.wbg.__wbg_crypto_ca6283e6a0198dab = handleError(function(arg0) {
        var ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_newnoargs_8aad4a6554f38345 = function(arg0, arg1) {
        var ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_1f85aaa5836dfb23 = handleError(function(arg0, arg1) {
        var ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_self_c0d3a5923e013647 = handleError(function() {
        var ret = self.self;
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_window_7ee6c8be3432927d = handleError(function() {
        var ret = window.window;
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_globalThis_c6de1d938e089cf0 = handleError(function() {
        var ret = globalThis.globalThis;
        return addHeapObject(ret);
    });
    imports.wbg.__wbg_global_c9a01ce4680907f8 = handleError(function() {
        var ret = global.global;
        return addHeapObject(ret);
    });
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        var ret = getObject(arg0) === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        var ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
        throw takeObject(arg0);
    };

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    const { instance, module } = await load(await input, imports);

    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;

    return wasm;
}

export default init;
export { Block, BlockBuilder, EntanglementProof, Fingerprint, Game, Mask, MaskProof, Payload, PrivateKey, PublicKey, RotationProof, SecretShare, SecretShareProof, ShuffleProof, Stack };
