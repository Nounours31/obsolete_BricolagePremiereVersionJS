'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-08 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2194';
    this._commitGIT = '6d8f34ca8d9353cfeadbda288a94a0fc7e358abd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}