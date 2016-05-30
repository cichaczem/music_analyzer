export default {
  isValid(lastFmHandle) {
    let valid = true

    if(lastFmHandle == undefined || lastFmHandle == null) {
      return valid = false
    }

    if(lastFmHandle.length < 2) {
      return valid = false
    }

    return valid
  }
}
