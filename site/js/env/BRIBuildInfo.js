'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-10 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-860';
    this._commitGIT = 'accf3bdbe3b86cb9fa6dc281c554a5980c3d1557';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}