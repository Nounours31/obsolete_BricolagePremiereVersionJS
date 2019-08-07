'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-07 08:00:13';
    this._versionBuild = 'jenkins-Bricolage-235';
    this._commitGIT = '64eaa46721f483d76eba848c02e9437d47f38b1e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}