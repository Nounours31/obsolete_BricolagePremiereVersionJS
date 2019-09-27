'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-27 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-440';
    this._commitGIT = '5777fb5265654506f7881ff5845889071483f621';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}