'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-14 20:00:19';
    this._versionBuild = 'jenkins-Bricolage-266';
    this._commitGIT = '511307a7aa0430411c0b7b944babdefbfae90dc4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}