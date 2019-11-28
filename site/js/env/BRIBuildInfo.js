'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-28 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-689';
    this._commitGIT = '1f08f872be50a70ed572e6a2a9c54045392b25eb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}