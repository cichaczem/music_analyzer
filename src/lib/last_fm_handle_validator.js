export default {
  isValid(lastFmHandle) {
    let valid = true

    if(lastFmHandle == undefined || lastFmHandle == null) {
      valid = false
    }

    if(lastFmHandle.length < 2) {
      valid = false
    }

    return valid
  }
}
