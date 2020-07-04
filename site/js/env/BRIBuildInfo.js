'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-04 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1563';
    this._commitGIT = 'cea3c9ea346d210dba8de771eb01c5c51fdf9546';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}