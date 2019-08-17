'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-17 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-277';
    this._commitGIT = '292e6156cfd912c1e02b90ef27fdc7f460d0bf34';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}