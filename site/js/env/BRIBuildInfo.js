'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-16 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-639';
    this._commitGIT = '9a9247ab9ea0b6d12091ef7c3197574c3d5eaf20';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}