'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-25 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1896';
    this._commitGIT = '142a41fe50cb64c8c01ae627acef05c402acb94f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}