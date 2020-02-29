'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-29 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1062';
    this._commitGIT = '30d54f287b1b17ec5586dfa01e28063f491fa22d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}