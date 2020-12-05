'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-05 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-2180';
    this._commitGIT = 'baf50c8b7bf6cd77eeef69091acc45e23ae570fb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}