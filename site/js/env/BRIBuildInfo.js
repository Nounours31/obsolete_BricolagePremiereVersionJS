'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-27 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2023';
    this._commitGIT = '57c89ced00cd8f09de390e4c4adfe18b383dff6c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}