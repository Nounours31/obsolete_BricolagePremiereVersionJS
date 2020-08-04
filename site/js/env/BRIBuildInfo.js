'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-04 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1690';
    this._commitGIT = 'ca7b1d2feb767db12ee4ad9ef99301e258ddf206';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}