'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-23 20:00:13';
    this._versionBuild = 'jenkins-Bricolage-178';
    this._commitGIT = '4a0011e7052941ec1ccb95889832d80068e51d02';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}