'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-27 20:00:11';
    this._versionBuild = 'jenkins-Bricolage-194';
    this._commitGIT = 'e98a7f0103f0875f66e1f973ebed79a06c01ce34';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}