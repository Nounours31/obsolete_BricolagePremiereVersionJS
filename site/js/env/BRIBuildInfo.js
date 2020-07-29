'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-29 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1664';
    this._commitGIT = 'ad3690356181b04b950d850b4d589e33bf3ece0f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}