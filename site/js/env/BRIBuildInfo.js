'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-10 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-983';
    this._commitGIT = 'b44650abf51b1cee7ff11f346c4aeac0dc022f6a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}