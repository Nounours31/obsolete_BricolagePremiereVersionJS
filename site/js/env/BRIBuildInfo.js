'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-02 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1069';
    this._commitGIT = '751b704a771b83b0cd452277eb03c6025d7dd041';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}