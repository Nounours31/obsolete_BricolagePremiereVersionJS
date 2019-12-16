'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-16 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-760';
    this._commitGIT = '4c7a7b48ad7ce65c6d49ce6a7d6265584fb14287';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}